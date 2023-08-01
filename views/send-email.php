<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = trim($_POST["phone"]);
    $project = trim($_POST["project"]);
    $contact_time = trim($_POST["contact-time"]);

    // Aquí debes agregar la validación de los datos recibidos

    // Configura los datos del correo electrónico
    $recipient = "pedro28aguilar@gmail.com";
    $subject = "Nuevo mensaje de contacto de $name";
    $email_content = "Nombre: $name\n";
    $email_content .= "Correo electrónico: $email\n\n";
    $email_content .= "Número de teléfono: $phone\n\n";
    $email_content .= "Descripción del proyecto: $project\n\n";
    $email_content .= "Horario de contacto: $contact_time\n\n";

    // Envía el correo electrónico
    if (mail($recipient, $subject, $email_content)) {
        http_response_code(200);
        echo "¡Gracias! Tu mensaje ha sido enviado.";
    } else {
        http_response_code(500);
        echo "Lo siento, ha ocurrido un error al enviar tu mensaje.";
    }

} else {
    http_response_code(403);
    echo "Lo siento, ha ocurrido un error al procesar tu mensaje.";
}
?>