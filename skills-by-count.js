/*
Run the code in the console of https://www.freelancer.com/job/
*/

{
    let skills = {};
    jQuery('li[data-job-category-item]').each(function () {
        let sum = 0;
        let title;
        jQuery(this).find('a.PageJob-category-link').each(function (index) {
            if (index === 0) {
                const titleLine = jQuery(this).text().trim();
                const matches = titleLine.match(/\(([^)]*)\)[^(]*$/);
                title = matches.input.substr(0, matches.index - 1);
                sum += +(matches[1]);
            } else {
                const titleLine = jQuery(this).text().trim();
                const matches = titleLine.match(/\(([^)]*)\)[^(]*$/);
                sum += +(matches[1]);
            }
        });

        if (sum > 0) {
            if (jQuery.isArray(skills[sum])) {
            } else {
                skills[sum] = new Array();
            }
            skills[sum].push(title);
        }
    });
    console.log(skills);
}
