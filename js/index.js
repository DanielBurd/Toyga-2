(function load(){
    const details=location.search;
    const detailsArr=details.split('&');
    document.getElementById('firstName').innerHTML=detailsArr[0].substring(detailsArr[0].indexOf('=')+1);
    document.getElementById('lastName').innerHTML=detailsArr[1].substring(detailsArr[1].indexOf('=')+1);
    document.getElementById('age').innerHTML=detailsArr[2].substring(detailsArr[2].indexOf('=')+1);
    document.getElementById('email').innerHTML=detailsArr[3].substring(detailsArr[3].indexOf('=')+1);
    document.getElementById('country').innerHTML=detailsArr[4].substring(detailsArr[4].indexOf('=')+1);
    document.getElementById('countryCode').innerHTML=detailsArr[5].substring(detailsArr[5].indexOf('=')+1);
    document.getElementById('phone').innerHTML=detailsArr[6].substring(detailsArr[6].indexOf('=')+1);
})();