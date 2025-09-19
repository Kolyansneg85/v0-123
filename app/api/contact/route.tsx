import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, source, timestamp, formId } = body

    console.log("[v0] Received form data:", { name, phone, email, source, timestamp, formId })

    const webhookUrl = "https://n8n.getsync.ru/webhook/863014e2-2cde-4997-9e56-3c8cad59b1a9/chat"
    console.log("[v0] Webhook URL:", webhookUrl)

    try {
      const chatId = "form_" + Math.random().toString(36).substr(2, 9)
      const formMessage = `Новая заявка с сайта "Коллекционер"

Тип формы: ${formId || source}
Имя: ${name || "Не указано"}
Телефон: ${phone}
Email: ${email || "Не указан"}
Источник: ${source}
Дата: ${new Date(timestamp).toLocaleString("ru-RU")}`

      const webhookPayload = {
        chatId: chatId,
        chatInput: formMessage,
        route: formId || "form",
      }

      console.log("[v0] Sending webhook payload:", webhookPayload)

      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookPayload),
      })

      console.log("[v0] Webhook response status:", webhookResponse.status)
      console.log("[v0] Webhook response headers:", Object.fromEntries(webhookResponse.headers.entries()))

      if (!webhookResponse.ok) {
        const responseText = await webhookResponse.text()
        console.error("[v0] Webhook failed with status:", webhookResponse.status, "Response:", responseText)
        throw new Error(`Webhook request failed with status ${webhookResponse.status}`)
      }

      const responseData = await webhookResponse.text()
      console.log("[v0] Webhook response data:", responseData)
      console.log("[v0] Заявка успешно отправлена через webhook")
    } catch (webhookError) {
      console.error("[v0] Ошибка webhook:", webhookError)
      return NextResponse.json({ success: false, message: "Ошибка отправки заявки" }, { status: 500 })
    }

    console.log("[v0] Новая заявка обработана:", {
      name: name || "Не указано",
      phone,
      email: email || "Не указан",
      source,
      formId,
      timestamp,
    })

    return NextResponse.json({
      success: true,
      message: "Заявка успешно отправлена",
    })
  } catch (error) {
    console.error("[v0] Ошибка обработки заявки:", error)
    return NextResponse.json({ success: false, message: "Ошибка сервера" }, { status: 500 })
  }
}
