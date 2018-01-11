//Asking for input of a shape:)
var shape = Number(prompt("Welcome to the best shape simulation ever in the entire world!\n Please select desired shape:\n 1) Square\n 2) Rectangle\n 3) Triangle"));
//Veryfing if the input of the shape entered correctly 
if (shape != 1 && shape != 2 && shape != 3) {
    alert("Error. Please select 1 or 2 or 3, for the shape type");
}
else {
    var shapeWidth = void 0;
    var shapeLength = void 0;
    var isError = false;
    //Asking for shape dimentions according to relevant chosen shape 
    switch (shape) {
        case 1://Square
            shapeWidth = Number(prompt("Enter sqaure side length"));
            if (shapeWidth < 1 || isNaN(shapeWidth)) {
                alert("Error. Please enter a positive integer number.");
                isError = true;
            }
            break;
        case 2://Rectangle
            shapeWidth = Number(prompt("Please enter rectangle side width"));
            if (shapeWidth < 1 || isNaN(shapeWidth)) {
                alert("Error. Please enter a positive integer number.");
                isError = true;
            }
            if (!isError) {
                shapeLength = Number(prompt("Please enter rectangle length"));
                if (shapeLength < 1 || isNaN(shapeLength)) {
                    alert("Error. Please enter a positive integer number.");
                    isError = true;
                }
            }
            break;
        case 3://Triangle
            shapeWidth = Number(prompt("Please enter triangle side length"));
            if (shapeWidth < 1 || isNaN(shapeWidth)) {
                alert("Error. Please enter a positive integer number.");
                isError = true;
            }
            break;
    }
    if (!isError) {
        //Asking for the pattern of the chosen shape
        var shapeForm = Number(prompt("Please select shape content:\n 1) * * * * *\n 2) *         *\n 3) 1 2 3 4 5\n 4) 5 4 3 2 1"));
        //Verying if the input of the pattern entered correctly
        if (shapeForm != 1 && shapeForm != 2 && shapeForm != 3 && shapeForm != 4) {
            alert("Error. Please select 1 or 2 or 3 or 4, for the shape content.");
            isError = true;
        }
        if (!isError) {
            switch (shape) {
                case 1:
                    printRectangle(shapeWidth, shapeWidth, shapeForm);
                    break; //Calling the function that prints the rectangle, using same input for width and for length so it will print a square
                case 2:
                    printRectangle(shapeWidth, shapeLength, shapeForm);
                    break; //Calling the function that prints the rectangle
                case 3:
                    printTriangle(shapeWidth, shapeForm);
                    break; //Calling the function that prints the triangle
            }
        }
    }
    //Function that prints out rectangle (including square)
    function printRectangle(rows, columns, form) {
        var index;
        var index2;
        for (index = 1; index <= rows; index++) {
            for (index2 = 1; index2 <= columns; index2++) {
                switch (form) {
                    case 1://Prints full shape of stars
                        document.write("* ");
                        break;
                    case 2://Prints empty shape of stars
                        if (index == 1 || index2 == 1 || index == rows || index2 == columns) {
                            document.write("* ");
                        }
                        else {
                            document.write("&nbsp&nbsp");
                        }
                        break;
                    case 3://Prints column number
                        document.write(index2.toString());
                        break;
                    case 4://Prints reversed column number
                        document.write((columns - index2 + 1).toString());
                        break;
                }
            }
            document.write("<br/><br/>");
        }
        if (shape == 1) {
            document.write("Square Perimeter: " + ("" + (rows * 2 + columns * 2)) + "<br/>");
            document.write("Square Area: " + ("" + rows * columns));
        }
        else {
            document.write("Rectangle Perimeter: " + ("" + 2 * (rows + columns)) + "<br/>");
            document.write("Rectangle Area: " + ("" + rows * columns));
        }
    }
    //Function that prints out triangle
    function printTriangle(width, form) {
        var index;
        var index2;
        for (index = 1; index <= width; index++) {
            for (index2 = 1; index2 <= index; index2++) {
                switch (form) {
                    case 1:////Prints full shape of stars
                        document.write(" * ");
                        break;
                    case 2://Prints empty shape of stars
                        if (index2 == 1 || index2 == index || index == width) {
                            document.write(" * ");
                        }
                        else {
                            document.write("&nbsp&nbsp");
                        }
                        break;
                    case 3://Prints column number
                        document.write(index2.toString());
                        break;
                    case 4://Prints reversed column number
                        document.write((width - index2 + 1).toString());
                        break;
                }
            }
            document.write("<br/><br/>");
        }
        //Relevant calclution for triangle
        document.write("Triangle Perimeter: " + ("" + width * 3) + "<br>");
        document.write("Triangle Area: " + ("" + width * width / 2));
    }
}
//# sourceMappingURL=app.js.map