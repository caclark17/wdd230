const lastvisit = localStorage.getItem('#lastvisit');

if (lastvisit == null)
{
    document.getElementById('lastvisit').innerHTML = `This is your first visit`;
}
else {
    
    const factor = 1000 * 60 * 60 * 24;

    let daysbetween = Date.now() - lastvisit;
    console.log(daysbetween);
    
    let numberOfDays = daysbetween / factor;
    document.getElementById('lastvisit').innerHTML = `${numberOfDays.toFixed(2)} days since your last visit`;
}

localStorage.setItem('#lastvisit', Date.now());