Vue.filter('datetime', (v, f) => {
    if(!v) return '';
    if(!f) f = 'yyyy-MM-dd';
debugger
    return dateFns.format(v, f);
});