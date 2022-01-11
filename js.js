let sout;

sout = "<table border='0' width='300' height='300' cellSpacing='0' cellPadding='3'>"
for (i = 1; i <= 6; i++) {
    sout = sout + "<tr>";
    for (j = 1; j <i; j++) {
        sout = sout + "<td>" + "*" + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>"


document.write(sout);
