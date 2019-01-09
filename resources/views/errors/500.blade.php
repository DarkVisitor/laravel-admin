<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Server Error</title>
    <style>
        html, body, .error-page{
            width: 100%;
            height: 100%;
        }
        html, body, h4, h5 {margin: 0;}
        .container {
            width: 700px;
            height: 600px;
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%,-60%);
            transform: translate(-50%,-60%);
        }
        .container img {
            width: 100%;
            height: 100%;
            display: block;
        }
        .text-con {
            position: absolute;
            left: 0px;
            top: 0px;
        }
        h4{
            position: absolute;
            left: 0px;
            top: 0px;
            font-size: 80px;
            font-weight: 700;
            color: #348EED;
        }
        h5{
            position: absolute;
            width: 700px;
            left: 0px;
            top: 100px;
            font-size: 20px;
            font-weight: 700;
            color: #67647D;
        }
        .back-btn-group{
            position: absolute;
            right: 0px;
            bottom: 20px;
        }

    </style>
</head>
<body>
<div class="error-page">
    <div class="container">
        <img src="/svg/error-404.svg">
        <div class="text-con">
            <h4>500</h4>
            <h5>Oh~~鬼知道服务器经历了什么~</h5>
        </div>
        <div class="back-btn-group">
            <a href="#">返回首页</a>
            <a href="#">返回上一页</a>
        </div>
    </div>
</div>
</body>
</html>