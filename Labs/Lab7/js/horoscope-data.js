var zodiac_sign = "Cancer";
var birth_month = "July";
var birth_day = 19;
var lucky_number = 19.0;
var Horoscope_description = "You are sensitive and emotional, with a strong intuition. You value family and home life, and you are nurturing and caring towards others.";
var belief = true;

var displayed_sign = document.getElementById("sign");
displayed_sign.innerHTML = zodiac_sign;

var birthday = document.getElementsByClassName('birthday');
birthday[0].innerHTML = birth_month + " " + birth_day + "th";

var lucky_num = document.getElementsByClassName('luckyNum');
lucky_num[0].innerHTML = "Lucky number: " + lucky_number;

var paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
paragraphs[0].innerHTML = Horoscope_description;

paragraphs[1].innerHTML = "My belief in astrology: <strong>" + belief + "</strong>";

var cancer_mood_rating = 5.0;
var leo_mood_rating = 4.5;
var average_mood_rating = (cancer_mood_rating + leo_mood_rating) / 2;

paragraphs[2].innerHTML = "Today's mood rating for " + zodiac_sign + ": "+  cancer_mood_rating +  "     out of 5. The average mood rating of Leo and Cancer is: " + average_mood_rating + " out of 5.";


var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
var cancer = signs[6];
var leo = signs[7];

paragraphs[3].innerHTML = "Your zodiac sign is " + cancer + " and your friend's zodiac sign is " + leo + ".";

var Horoscope = [
    "Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals." ,
    "Communication is key today. Express yourself clearly and listen to others." ,
    "Trust your intuition. It will guide you in making the right decisions." ,
    "Your creativity shines today. Use it to inspire and lead others." ,
    "Pay attention to the details. Your meticulous work will pay off." ,
    "Balance is essential. Find harmony in all aspects of your life." ,
    "Embrace transformation. Let go of what no longer serves you." ,
    "Adventure awaits. Explore new horizons and expand your horizons." ,
    "Hard work leads to success. Keep pushing toward your goals." ,
    "Your unique perspective is an asset. Share your ideas with others." ,
    "Trust your emotions. They will guide you in making the right choices."
    ];

var leo_horoscope_description = Horoscope[7];

Horoscope[5] = "Your attention to detail will be rewarded today. Stay focused and organized.";
var cancer_horoscope_description = Horoscope[5];


paragraphs[4].innerHTML = "Leo Horoscope: " + leo_horoscope_description + "<br> Cancer Horoscope: " + cancer_horoscope_description;

console.log(Horoscope);