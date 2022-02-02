/*
  MIT License
  Copyright (c) 2021 MichalKowalczyk
  
  Source: https://github.com/MichalKowalczyk/CodeeboTools

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

require('phpmailer/class.phpmailer.php');

$dataString = file_get_contents("php://input");
$data = json_decode($dataString);

$sender_name = $data->name;
$sender_message = $data->message;
$sender_email = $data->email;
$sender_phone = $data->phone;
$isRuleAccepted = $data->isRuleAccepted;
$isPhoneAccepted = $data->isPhoneAccepted;
$isMarketingAccepted = $data->isMarketingAccepted;

if ($sender_name && $sender_phone && $sender_email) {
	$mail = new PHPMailer();
	$mail->IsSMTP();
	$mail->SMTPDebug = 0;
	$mail->CharSet = 'UTF-8';
	$mail->SMTPAuth = TRUE;
	$mail->SMTPSecure = "ssl";
	$mail->Port     = "465";
	$mail->Username = "xxx@serwer.xx.pl";
	$mail->Password = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
	$mail->Host     = "mail-serwer.xx.pl";
	$mail->Mailer   = "smtp";
	$mail->SetFrom("xxx@xxx.pl", "Name lorem");
	$mail->IsHTML(true);
	$mail->AddAddress("xxx_a@xx.pl");
	$mail->AddAddress("xxx_b@xx.pl");
	$mail->Subject = "Subject lorem ipsum";
	$mail->WordWrap   = 80;
	$mail->Body .= "$sender_name";
	$mail->Body .= "<br />";
	$mail->Body .= "$sender_email";
	$mail->Body .= "<br />";
	$mail->Body .= "$sender_phone";
	$mail->Body .= "<br />";
	$mail->Body .= "$sender_message";
	$mail->Body .= "<br />";
	$mail->Body .= "<br />";
	$mail->Body .= "isRuleAccepted: $isRuleAccepted";
	$mail->Body .= "<br />";
	$mail->Body .= "isPhoneAccepted: $isPhoneAccepted";
	$mail->Body .= "<br />";
	$mail->Body .= "isMarketingAccepted: $isMarketingAccepted";


	if (($mail->Send())) {
		echo "success";
	} else {
		echo "fail";
	}
}