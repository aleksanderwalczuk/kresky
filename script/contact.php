<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $brand = $_POST['brand'];
  $mailFrom = $_POST['email'];
  $number = $_POST['number'];
  $facebook = $_POST['fb'];
  $message = $_POST['message'];

  $mailTo = "asztonski@gmail.com";
  $headers = "Wiadomość od ".$mailFrom;
  $txt = "Masz nową wiadomość od ".$mailFrom.".\n\n".$name.".\n\n Treść wiadomości: ".$message.".\n\n Numer telefonu: ".$number;


  mail($mailTo, $brand, $txt, $headers);
  header("Location: index.html?mailsend");
}



?>