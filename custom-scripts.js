(function () {

    /**
     * Generate a TOC for any article with 2 or more <h2> tags.
     * Convert each <h2> and <h3> element into clickable links.
     */
    function generateToc() {

        let h_count = 0;
        let h2_count = 0;
        let li = '';

        $("h2,h3").each(function () {

            // Update heading index value.
            h_count++;

            // Get element type (either "h2" or "h3").
            let elType = $(this).prop('nodeName').toLowerCase();

            // Wrap inner contents of <h> tag with an <a> tag.
            $(this).wrapInner('<a href="#index-' + h_count + '" id="index-' + h_count + '" class="anchor-target"></a>');

            // If this element is an <h2> tag, increase count and add <li> tag to $li variable.
            if (elType === 'h2') {
                h2_count++;
                li = li += '<li><a href="#index-' + h_count + '">' + $(this).text() + '</a></li>';
            }

        });

        // If we have 2 or more <h2> tags, insert Table of Contents before first occurrence of <h2> tag.
        if (h2_count >= 2) {
            let toc = '<section class="index-list"><h4>In this article</h4><ul>' + li + '</ul></section>';
            $(toc).insertBefore("article > h2:first");
        }
    }

    function convertImagesToLightboxLinks() {
       alert('done loading');
    }

    if (window.addEventListener) {
        window.addEventListener('load', generateToc, false);
        window.addEventListener('load', convertImagesToLightboxLinks, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', generateToc);
        window.attachEvent('onload', convertImagesToLightboxLinks);
    }
})()
