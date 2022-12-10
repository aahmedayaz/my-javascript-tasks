let arr = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,,2012,2013,2014,2015,2016,2017,2018,2019,2020]

let checkLeapYear = (array) => {
    return array.map((year) =>{
        if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
            return year;
        }
    }).filter((year) => {
        return year != undefined;
    })
}


console.log(checkLeapYear(arr));