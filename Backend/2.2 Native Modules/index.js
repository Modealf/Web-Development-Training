const fs = require("fs");

fs.writeFile("Message.txt", "Fuck You!", (err) => {
    if (err) throw err;
    console.log("The file has been saved successfully");
}    
);