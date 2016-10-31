<!DOCTYPE html>
<html>
  <?php //PHP helper functions
    function debug_to_console($message){
      echo "<script>";
      echo "console.log(\"$message\")";
      echo "</script>";
    }
  ?>

  <?php
    function read_cff($username_hash){ //Returns an array of class-name strings as read from file.
      $source_file = "data/user_data/" . $username_hash . ".txt";
      $handle = fopen($source_file, "r") or die("Unable to open file for reading! (1)");
      if($handle){
        $file_classes = [];
        while (($line = fgets($handle)) !== false) {
            if($line[0] == '#')
              continue;
            else {
              array_push($file_classes, $line);
            }
        }
        fclose($handle);
        return $file_classes;
      }
      else{
        echo "Unable to open file for reading! (2)";
      }
    }

    function write_ctf($username_hash, $class_array){ //Writes an array of class-names to file
      $dest_file = $username_hash . ".txt";
      $handle = fopen($dest_file, "w") or die("Unable to open file for writing! (1)");
      if($handle){
        //write
        fclose($handle);
      }
      else{
        echo "Unable to open file for writing! (2)";
      }
    }
  ?>

  <?php
    //$ajax_data = $_POST['data'];

    /*
    $test_key = "20eabe5d64b0e216796e834f52d61fd0b70332fc";
    $test_array = read_cff($test_key);
    echo $test_array[0];
    */
  ?>
</html>
