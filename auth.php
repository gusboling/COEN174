<!DOCTYPE html>
<html>
<head>
</head>

<!--
PHP block chooses/displays appropriate login procedure based on user type.
New users will be prompted to create password and input course history. Returning
users will see a personal dashboard after entering a password. Users
entering an invalid student ID will be returned to the login, with an error message
displayed.
-->
<?php

  function debug_to_console($message){
    echo "<script>";
    echo "console.log(\"$message\")";
    echo "</script>";
  }

  function load_users($source_file){
    $user_array = array();

    $handle = fopen($source_file, "r") or die("Unable to open file!");
    if ($handle) {
        while (($line = fgets($handle)) !== false) {
            if($line[0] == '#')
              continue;
            else {
              $u_hash = strtok($line, " ");
              $p_hash = strtok(" ");
              //array_push($user_array, $u_hash, $p_hash);
              $user_array[$u_hash] = $p_hash;
            }
        }
        fclose($handle);
    } else {
        echo "Error Opening User File!";
    }
    return $user_array;
  }

  function auth_handler(){
    $username = $_POST['ID'];
    $username_hash = sha1($username);
    $previous_users = load_users("data/users.txt");

    if(strlen($username) != 7){
      echo "Error: Student ID Not 7 Digits Long!";
      echo "<br><a href='index.html'>Return to Login</a>";
    }
    elseif(array_key_exists($username_hash, $previous_users)){
      echo "<h3>Welcome user #";
      echo $_POST['ID'];
      echo "</h3>";
      echo "<form action='auth.php' method='post'>Please enter your password.<br><input type='text' name='password'><br><input type='submit'></form>";
    }
    else{
      echo "Welcome new user! Please create a password to access data in the future!";
    }
  }

  debug_to_console("PHP Initialized.");
  auth_handler();
?>
</html>
