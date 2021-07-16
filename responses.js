function getBotResponse(input) {
    // Simple responses
    if ((input == "hello") || (input == "hey") || (input == "hi")) {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }else if (input == "how are you") {
        return "I'm good";
    }else if (input == "who are you?") {
        return "I'm a chatbot. Thanks for asking";
    } else if (input == "can you help me") {
        return "I can help you by giving some good recommendations .Two ways in which I can help  1. Choose color 2. Upload your picture";
    }else if (input == "i want to choose color") {
        return "Which color you would like to choose  BLUE , PINK";
    }else if (input == "BLUE") {
        return (
            window.location.href = "https://pragyamittal0.github.io/blue/"
        );
    }
    else if (input == "PINK") {
        return (
            window.location.href = "https://flamboyant-yonath-c6cbbd.netlify.app/"
        );
    }
    else if (input == "I want to upload picture") {
        return "Please upload the picture using the icon shown with heart and after uploading it double click on your face. After that write the color you can see after double clicking on it";
    }
    else if ((input == "Khaki")|| (input == "Pale Taupe") || (input == "Copper Penny")) {
        return (
            window.location.href = "https://pragyamittal0.github.io/white/"
        );
    }
    else if ((input == "Light Taupe")|| (input == "Chocolate") || (input == "Saddle Brown")) {
        return (
            window.location.href = "https://pragyamittal0.github.io/white/"
        );
    }
    else {
        return "Try asking something else!";
    }
}