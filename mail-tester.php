<?php
/**
 * @file
 * Email tester.
 */

$filename = $argv[1];
if (!file_exists(__DIR__ . '/build/' . $filename)) {
  print 'File Does not exists, Please pass file name.';
  return;
}

$to = 'mahesh.saini@srijan.net';
$subject = 'Email tester';
$from = 'mahesh.saini@srijan.net';

// To send HTML mail, the Content-type header must be set.
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Create email headers.
$headers .= 'From: ' . $from . "\r\n" . 'Reply-To: ' . $from . "\r\n" . 'X-Mailer: PHP/' . phpversion();

// Compose a simple HTML email message.
$message = file_get_contents('build/' . $filename);

// Sending email.
if (mail($to, $subject, $message, $headers)) {
  echo 'Your mail has been sent successfully.';
}
else {
  echo 'Unable to send email. Please try again.';
}
