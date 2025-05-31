export function CopyToClipboard(text: string) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            console.log("Copied to clipboard");
        }).catch((err) => {
            console.log("failed to copy to clipboard");
        });
    }else{
        //FallBack

        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        try {
            document.execCommand('copy');
            console.log("Copied to (FallBack):"["text"]);
        }catch(err) {
            console.log("failed copy to (FallBack):", err);
        }
        document.body.removeChild(textarea);
    }
}