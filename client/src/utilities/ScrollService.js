import { TOTAL_SCREENS } from "./commonUtils";
import {Subject} from 'rxjs'

export default class ScrollService
{
    static scrollHandler = new ScrollService();
    static currentScreenBroadCaster = new Subject()
    static currentSreenFadeIn = new Subject()

    constructor()
    {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }

    scrollToHireMe = ()=>
    {
        let contactMeScreen = document.getElementById("Contact Me")
        if (!contactMeScreen)
            return;
        contactMeScreen.scrollIntoView({behavior:"smooth"})
    }

    scrollToHome = ()=>
    {
        let homeScreen = document.getElementById("Home")
        if (homeScreen)
            return;
        homeScreen.scrollIntoView({behavior:"smooth"})
    }

    isElementInView = (elem, type) =>
    {
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.Bottom;
        let partiallyVisable = elementTop < window.innerHeight && elementBottom >= 0;
        let completelyVisable = elementTop >= 0 && elementBottom <= window.innerHeight;

        switch (type)
        {
            case "partial":
            return partiallyVisable;

            case "complete":
            return completelyVisable;
                
            default:
            return false
        }
    }

    checkCurrentScreenUnderViewport = (event) => 
    {
        if (!event || Object.keys(event).length < 1)
            return;
        for (let screen of TOTAL_SCREENS)
        {
            let screenFromDom = document.getElementById(screen.screen_name);
            if(!screenFromDom)
                continue;

            let fullyVisible = this.isElementInView(screenFromDom, "complete");
            let partiallyVisable = this.isElementInView(screenFromDom, "partial");

            if(fullyVisible || partiallyVisable)
            {
                if(partiallyVisable && !screen.alreadyRendered)
                {
                    ScrollService.currentScreenFadeIn.next
                    ({
                        fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendered'] = true
                    break;
                }

                if(fullyVisible)
                {
                    ScrollService.currentScreenBroadCaster.next
                    ({
                        screenInView: screen.screen_name
                    });
                    break;
                }
            }
        }
    }
}