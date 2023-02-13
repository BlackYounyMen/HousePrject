export function ReturnDate(t) {
    const y = t.getFullYear();
    const m = t.getMonth() + 1;
    const d = t.getDate();
    function timeAdd0(str) {
        if (str < 10) {
            str = "0" + str;
        }
        return str;
    }

    var time = `${timeAdd0(y)}-${timeAdd0(m)}-${timeAdd0(d)}`;
    return time;
}