const Formatter = function() {}
Formatter.phone = function(target){
    return target? target.replaceAll("-", "").replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3") : "";
}

export default Formatter;