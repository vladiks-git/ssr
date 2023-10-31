interface ITemplateProps {
    cssPath: string;
    jsPath: string;
    content: string;
}

export function renderTemplate({content, cssPath, jsPath}: ITemplateProps){
    return `<!DOCTYPE html>
              <html lang="en">
                <head>
                   <meta charset="UTF-8">
                   <link rel="stylesheet" href="/client/${cssPath}">
                   <title>Title</title>
                </head>
                <body>
                  <div id="root">${content}</div>
                  
                  <script src="/client/${jsPath}"></script>
                </body>
               </html>
`
}
