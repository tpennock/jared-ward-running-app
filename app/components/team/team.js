'use strict';

angular.module('jwrApp.blocks').component('jwrTeam', {
    controllerAs: '$team',
    templateUrl: 'components/team/team.html',
    bindings: {},
    controller: function JwrTeamCtrl($log) {
        var $team = this;

        $team.members = [
            {
                name: 'Jared Ward',
                role: 'Head Coach',
                image: 'img/jwrc/team/p1-2-370x450.jpg',
                blurb: '',
                bio: '<p>Born and raised in Kaysville, Utah, Jared attended Davis High School prior to Brigham Young University, where he earned a Masters Degree in Statistics. While competing for the Cougars, Jared was a two-time Cross Country All-American. The streets of Los Angeles, have become Jared\'s home away from home winning the 2015 US Championships and qualifying for the 2016 Olympic marathon team there.</p>' +
                     '<p>Initially considering himself a soccer player, we have Jared\'s parents and patient track coaches to thank for him turning his sights to running. In addition to running fast himself, Jared is passionate about helping other develop as running, "I have been given a gift and I want to share what I have learned." That is why he is running this business: to help you become a better runner.</p>' +
                     '<p>Faith and family are at the center of Jared\'s life, "I love spending time with my kids at the park, or wrestling. I also love continuing to date my wife. My favorite pass-time is being with my family. I am a dad, I am a husband and I am a Mormon.</p>',
                social: [
                    {
                        icon: 'fa-twitter',
                        url: 'https://twitter.com/jwardy21'
                    }
                ]
            },
            {
                name: 'Rob Versaw',
                role: 'Managing Director',
                image: 'img/jwrc/team/p2-2-370x450.jpg',
                blurb: '',
                bio: '<p>Growing up the son of a high school coach, Rob has been passionate about running since middle school. He would later run a few seasons of track and field in college at the DII level, eventually transferring to Brigham Young University and completed his degree with a B.S. in Statistical Science. Along the way he enjoyed the opportunity of training with All-Americans Kyle Perry, Josh McAdams, and a small handful of other post-collegiates, including Jared, in the Provo area.</p>' +
                     '<p>His first job during college was running the operations for a top rated Denver moving company. After graduating from BYU, he led Arizona Milesplit, calculated risk at the nation’s largest power plant, and currently is a Product Manager at Vivint.</p>' +
                     '<p>Outside of work, Rob enjoys hiking, skiing, economics, hockey and watching the New England Patriots.</p>',
                social: [
                    {
                        icon: 'fa-linkedin',
                        url: 'https://www.linkedin.com/in/rob-versaw'
                    }
                ]
            },
            {
                name: 'Taylor Pennock',
                role: 'Webmaster',
                image: 'img/jwrc/team/p3-370x450.jpg',
                blurb: '',
                bio: '<p>Taylor is a software engineer and technology enthusiast.</p>' +
                     '<p>He holds a Masters of Science in Information Systems from the University of Utah and currently works at Vivint as a Manager of Software Engineering. When not at work, Taylor enjoys the outdoors and spending time with his family.</p>' +
                     '<p>Though not a competitive athlete himself, Taylor enjoys getting up and running before work. He is also among the first to sign up for any friendly office competitions.</p>',
                social: [
                    {
                        icon: 'fa-linkedin',
                        url: 'https://www.linkedin.com/in/taylorpennock'
                    }
                ]
            },
            {
                name: 'Valerie Mey',
                role: 'MS, RDN, Head Dietitian',
                image: 'img/jwrc/team/p4-370x450.jpg',
                blurb: '',
                bio: '<p>Starting her career in marketing and international studies, Valerie went through some significant life experiences and wanted to follow her passion to help individuals with nutrition. After going back to school she fell in love with sports nutrition. Having earned her Master’s from the University of Utah, she is more than qualified to help you reach your goals with proper fueling strategies.</p>',
                social: [
                    {
                        icon: 'fa-linkedin',
                        url: 'https://www.linkedin.com/in/valeriemey'
                    }
                ]
            },
            {
                name: 'Jeff Smith',
                role: 'Design Guy',
                image: 'img/jwrc/team/p5-370x450.jpg',
                blurb: '',
                bio: '<p>Jeff works as UI/UX designer at HQ in Ogden, UT. He graduated from Weber State University as the Outstanding Graphic Designer with a BFA in Visual Communications/Graphic Design. At HQ, he is responsible for designing websites, apps (web, iOS, Android), identities, and branding materials for clients. When Jeff isn’t at work he is busy doing freelance work, brokering real estate deal (he holds a license), practicing his Spanish, or rooting for the San Francisco 49ers.</p>',
                social: [
                    {
                        icon: 'fa-linkedin',
                        url: 'https://www.linkedin.com/in/jeff-smith-66864437'
                    }
                ]
            }
        ];

    }
});
