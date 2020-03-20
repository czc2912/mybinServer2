module.exports=function(poster,time,content){
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible">
        <title>Mybin</title>
        <link rel="stylesheet"
    href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/default.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js"></script>
    </head>
    <body>
        <div class="block">
            <h1 class="title">
                Mybin
            </h1>
            <p class="poster">
                Paste from ${poster} at ${time}
            </p>
            <div class="descWrapper">
                <pre>${content}</pre>
            </div>
        </div>
    </body>
    <style scoped>
        .block{
            box-shadow:0 0 2px 1px #999;
            margin: -32px 64px 0 64px;
            padding-right: 12px;
            min-height: 400px;
            border-radius: 12px;
        }
        .title{
            margin-bottom: 24px;
        }
        .block h1{
            padding-top: 12px;
            font-size: 48px;
            text-align: center;
        }
        .poster{
            padding-top: -12px;
            text-align: center;
            margin: 8px auto;
            color: rgb(231, 16, 59);;
        }
        .descWrapper{
            text-align: left;
            margin: 12px 36px 0 36px;
            color:rgb(231, 16, 59);
            min-height: 240px; 
            border-radius: 8px;
            background-color: #e4e2e2d2;
        }
        pre{
            color: black;
            font-weight: 600px;
            padding-left: 16px;
            padding-top: 16px;
        }
        .upperdesc{
            padding-top: 18px;
            /* padding-bottom: 18px; */
        }
        .lowerdesc{
            /* padding-top: 18px; */
            padding-bottom: 18px;
        }
        .token{
            /* color: gray; */
            min-height: 240px;
        }
        </style>
    </html>`;
};