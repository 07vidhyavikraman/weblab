<html>
    <head><title>Prime</title></head>
    <body>
        <form method="POST">
            <label>Enter a number:</label>
            <input type="number" name="num">
            <input type="submit" name="submit">
        </form>
        <?php
        if(isset($_POST['submit']))
        {
        $num=$_POST['num'];
        $n=0;
        for($i=2;$i<$num;$i++)
        {
            if($num%$i==0){
                $n++;
                break;
            }
        }
            if($n==0){
                echo "$num is Prime";
            }
            else
            {
                echo "$num is not a prime";
            }
               
     }
     ?>
     </body></html>