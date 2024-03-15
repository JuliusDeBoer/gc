<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>404</title>
    <link
        rel="icon"
        href="https://media.tenor.com/j6HNDMU_fF4AAAAM/cow-dancing.gif"
    />
    <style>
        body {
            background: black;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            min-height: 100vh;
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body>
    <img
        src="https://http.cat/images/{{ $exception->getStatusCode() }}.jpg"
    />
</body>
</html>
