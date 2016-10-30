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

  function is_previous_user($username){
    $username_hash = sha1($username);
    $previous_users = load_users("data/users.txt");
    if(array_key_exists($username_hash, $previous_users)){
      return true;
    }
    else
      return false;
  }

  function is_bad_username($username){
    if(strlen($username) != 7){
      return true;
    }
    if(!ctype_digit($username)){
      return true;
    }
    return false;
  }

  function auth_handler(){
    //RESPONSE CASE 1: Username authentication
    if(isset($_POST['username'])){
      $username_input = $_POST['username'];
      if(is_bad_username($username_input)){
        echo "<h3>Error: Bad Username</h3><br>";
        echo "<a href='index.html'>Return to login page.</a>";
      }
      elseif(is_previous_user($username_input)){
        echo "<h3>Welcome user #";
        echo $username_input;
        echo "</h3>";
      }
      else{
        echo "<h3>Welcome new user!</h3>";
      }
    }
    //END RESPONSE CASE 1
    //RESPONSE CASE 2: Password authentication
    elseif(isset($_POST['e_password'])){
      echo "Nothing yet!";
    }
    //END RESPONSE CASE 2
    //RESPONSE CASE 3: New user password creation.
    elseif(isset($_POST['n_password'])){
      echo "Nothing yet!";
    }
    //END RESPONSE CASE 3
    //RESPONSE CASE 4: No valid $_POST values recieved (ERROR)
    else {
      echo "ERROR: No valid data recieved from client.";
      echo "<a href='index.html'>Return to login page.</a>";
    }
    //END RESPONSE CASE 4

  }

  debug_to_console("PHP Running.");
  auth_handler();
?>
</html>
