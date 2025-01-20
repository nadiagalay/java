document.getElementById("myfirstButton").onclick = function() {
    let a = prompt("Введіть коефіцієнт a:");
    let b = prompt("Введіть коефіцієнт b:");
    let c = prompt("Введіть коефіцієнт c:");

    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        alert("Корені рівняння: x1 = " + x1 + ", x2 = " + x2);
    } else if (discriminant === 0) {
        let x = -b / (2 * a);
        alert("Рівняння має один корінь: x = " + x);
    } else {
        alert("Рівняння не має дійсних коренів.");
    }
};