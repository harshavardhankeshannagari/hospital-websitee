<!DOCTYPE html>
<html lang="en">
<head>
    <title>Conditional Statement</title>
</head>
<body>
    <p id="test"></p>

    <script type="text/javascript">
        var a = 24
        if(a>=80){
            document.getElementById('test').innerHTML ="A Grade"
        }
        else if(a >= 60 && a < 80){
            document.getElementById('test').innerHTML ="B Grade"
        }
        else{
            document.getElementById('test').innerHTML ="C Grade"
        }

    </script>
</body>
</html>