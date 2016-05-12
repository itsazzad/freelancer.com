/*
Run the below code in the console of https://www.freelancer.com/job/
*/
var skills=[];
jQuery('.job-category-item').each(function(){
   var title=jQuery(this).find('.job-category-link').text().trim();
   var matches = title.match(/\(([^)]*)\)[^(]*$/);
   if(jQuery.isArray(skills[matches[1]])){
   }else{
      skills[matches[1]]=new Array();
   }
   skills[matches[1]].push(matches.input.substr(0, matches.index-1));

});
console.log(skills);
