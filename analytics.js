// analytics.js
const Analytics = {
    init: function() {
        if (!this.getCookie('analytics_consent')) {
            this.showCookieBanner();
        } else if (this.getCookie('analytics_consent') === 'true') {
            this.loadAnalytics();
        }
    },

    loadAnalytics: function() {
        // Google tag (gtag.js)
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-86D68E0YGD";
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-86D68E0YGD');
    },

    getCookie: function(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    },

    setCookie: function(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    },

    showCookieBanner: function() {
        const banner = document.createElement('div');
        banner.id = 'cookieBanner';
        banner.innerHTML = `
            <div style="position: fixed; bottom: 0; left: 0; right: 0; background: #f1f1f1; padding: 20px; text-align: center; box-shadow: 0 -2px 10px rgba(0,0,0,0.1);">
                <p>We use cookies to analyze site traffic. Accept to consent to our cookies.</p>
                <button onclick="Analytics.acceptCookies()" style="margin: 0 10px; padding: 8px 20px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">Accept</button>
                <button onclick="Analytics.declineCookies()" style="margin: 0 10px; padding: 8px 20px; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;">Decline</button>
            </div>
        `;
        document.body.appendChild(banner);
    },

    acceptCookies: function() {
        this.setCookie('analytics_consent', 'true', 365);
        document.getElementById('cookieBanner').remove();
        this.loadAnalytics();
    },

    declineCookies: function() {
        this.setCookie('analytics_consent', 'false', 365);
        document.getElementById('cookieBanner').remove();
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => Analytics.init());