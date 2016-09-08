(function () {
  'use strict';

  var htmlGeneratorHome = angular.module('app.generators.html', []);

  htmlGeneratorHome.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      // Audio
      .state('html-generator.audio', {
        url: '/audio',
        templateUrl: 'generators/html-generator/audio/audio.template.html',
        title: 'HTML5 Audio Generator',
        ncyBreadcrumb: {
          label: 'Audio'
        },
        metaTags: {
          title: 'HTML5 Audio Generator',
          description: 'Generate an HTML5 audio element to play sound or music on your website. Autoplay or loop, it\'s your choice! Preview, test, and copy the code to your website.'
        }
      })
      // Base Link
      .state('html-generator.base-link', {
        url: '/base-link',
        templateUrl: 'generators/html-generator/base-link/base-link.template.html',
        title: 'HTML Base Link Generator',
        ncyBreadcrumb: {
          label: 'Base Link'
        },
        metaTags: {
          title: 'HTML Base Link Generator'
        }
      })
      // Button
      .state('html-generator.button', {
        url: '/button',
        templateUrl: 'generators/html-generator/button/button.template.html',
        title: 'HTML Button Generator',
        ncyBreadcrumb: {
          label: 'Button'
        },
        metaTags: {
          title: 'HTML Button Generator',
          description: 'Generate a generic HTML button to display text, content or an image using our online HTML generator tool. Preview live and copy the code to your website.'
        }
      })
      // Details
      .state('html-generator.details', {
        url: '/details',
        templateUrl: 'generators/html-generator/details/details.template.html',
        title: 'HTML5 Details Generator',
        ncyBreadcrumb: {
          label: 'Details'
        },
        metaTags: {
          title: 'HTML5 Details Generator'
        }
      })
      // Dialog
      .state('html-generator.dialog', {
        url: '/dialog',
        templateUrl: 'generators/html-generator/dialog/dialog.template.html',
        title: 'HTML5 Dialog Generator',
        ncyBreadcrumb: {
          label: 'Dialog'
        },
        metaTags: {
          title: 'HTML5 Dialog Generator'
        }
      })
      // Hyperlink
      .state('html-generator.hyperlink', {
        url: '/hyperlink',
        templateUrl: 'generators/html-generator/hyperlink/hyperlink.template.html',
        title: 'HTML Hyperlink Generator',
        ncyBreadcrumb: {
          label: 'Hyperlink'
        },
        metaTags: {
          title: 'HTML Hyperlink Generator'
        }
      })
      // IFrame
      .state('html-generator.iframe', {
        url: '/iframe',
        templateUrl: 'generators/html-generator/iframe/iframe.template.html',
        title: 'HTML IFrame Generator',
        ncyBreadcrumb: {
          label: 'IFrame'
        },
        metaTags: {
          title: 'HTML IFrame Generator',
          description: 'Generate an IFrame to embed another HTML document into your own with our online HTML generator tool. Preview live and copy the code to your website.'
        }
      })
      // Image
      .state('html-generator.image', {
        url: '/image',
        templateUrl: 'generators/html-generator/image/image.template.html',
        title: 'HTML Image Generator',
        ncyBreadcrumb: {
          label: 'Image'
        },
        metaTags: {
          title: 'HTML Image Generator',
          description: 'Generate an HTML image element to display any image on your website using our online HTML generator tool. Preview live and copy the code to your website.'
        }
      })
      // Input Checkbox / Radio
      .state('html-generator.input-checkbox-radio', {
        url: '/input-checkbox-radio',
        templateUrl: 'generators/html-generator/input-checkbox-radio/input-checkbox-radio.template.html',
        title: 'HTML Checkbox & Radio Button Generator',
        ncyBreadcrumb: {
          label: 'Checkbox & Radio Button'
        },
        metaTags: {
          title: 'HTML Checkbox & Radio Button Generator'
        }
      })
      // Input Color
      .state('html-generator.input-color', {
        url: '/input-color',
        templateUrl: 'generators/html-generator/input-color/input-color.template.html',
        title: 'HTML5 Color Input Generator',
        ncyBreadcrumb: {
          label: 'Color Input'
        },
        metaTags: {
          title: 'HTML5 Color Input Generator'
        }
      })
      // Input Date / Time
      .state('html-generator.input-date-time', {
        url: '/input-date-time',
        templateUrl: 'generators/html-generator/input-date-time/input-date-time.template.html',
        title: 'HTML5 Date & Time Input Generator',
        ncyBreadcrumb: {
          label: 'Date & Time Input'
        },
        metaTags: {
          title: 'HTML5 Date & Time Input Generator'
        }
      })
      // Input Email
      .state('html-generator.input-email', {
        url: '/input-email',
        templateUrl: 'generators/html-generator/input-email/input-email.template.html',
        title: 'HTML5 Email Input Generator',
        ncyBreadcrumb: {
          label: 'Email Input'
        },
        metaTags: {
          title: 'HTML5 Email Input Generator',
          description: 'Generate an HTML5 email input. Some browsers validate the email address, and mobile browsers show an email-type keyboard. Preview and copy the code to your website.'
        }
      })
      // Input File
      .state('html-generator.input-file', {
        url: '/input-file',
        templateUrl: 'generators/html-generator/input-file/input-file.template.html',
        title: 'HTML File Browser Generator',
        ncyBreadcrumb: {
          label: 'File Browser'
        },
        metaTags: {
          title: 'HTML File Browser Generator'
        }
      })
      // Input Image
      .state('html-generator.input-image', {
        url: '/input-image',
        templateUrl: 'generators/html-generator/input-image/input-image.template.html',
        title: 'HTML Image Button Generator',
        ncyBreadcrumb: {
          label: 'Image Button'
        },
        metaTags: {
          title: 'HTML Image Button Generator'
        }
      })
      // Input Number / Range
      .state('html-generator.input-number-range', {
        url: '/input-number-range',
        templateUrl: 'generators/html-generator/input-number-range/input-number-range.template.html',
        title: 'HTML5 Number & Range Input Generator',
        ncyBreadcrumb: {
          label: 'Number & Range Input'
        },
        metaTags: {
          title: 'HTML5 Number & Range Input Generator'
        }
      })
      // Input Text
      .state('html-generator.input-password', {
        url: '/input-password',
        templateUrl: 'generators/html-generator/input-password/input-password.template.html',
        title: 'HTML Password Input Generator',
        ncyBreadcrumb: {
          label: 'Password Input'
        },
        metaTags: {
          title: 'HTML Password Input Generator'
        }
      })
      // Input Search
      .state('html-generator.input-search', {
        url: '/input-search',
        templateUrl: 'generators/html-generator/input-search/input-search.template.html',
        title: 'HTML5 Search Input Generator',
        ncyBreadcrumb: {
          label: 'Search Input'
        },
        metaTags: {
          title: 'HTML5 Search Input Generator'
        }
      })
      // Input Submit
      .state('html-generator.input-submit', {
        url: '/input-submit',
        templateUrl: 'generators/html-generator/input-submit/input-submit.template.html',
        title: 'HTML Submit Input Generator',
        ncyBreadcrumb: {
          label: 'Submit Input'
        },
        metaTags: {
          title: 'HTML Submit Input Generator'
        }
      })
      // Input Telephone
      .state('html-generator.input-telephone', {
        url: '/input-telephone',
        templateUrl: 'generators/html-generator/input-telephone/input-telephone.template.html',
        title: 'HTML5 Telephone Input Generator',
        ncyBreadcrumb: {
          label: 'Telephone Input'
        },
        metaTags: {
          title: 'HTML5 Telephone Input Generator'
        }
      })
      // Input Text
      .state('html-generator.input-text', {
        url: '/input-text',
        templateUrl: 'generators/html-generator/input-text/input-text.template.html',
        title: 'HTML Text Input Generator',
        ncyBreadcrumb: {
          label: 'Text Input'
        },
        metaTags: {
          title: 'HTML Text Input Generator'
        }
      })
      // Input URL
      .state('html-generator.input-url', {
        url: '/input-url',
        templateUrl: 'generators/html-generator/input-url/input-url.template.html',
        title: 'HTML5 URL Input Generator',
        ncyBreadcrumb: {
          label: 'URL Input'
        },
        metaTags: {
          title: 'HTML5 URL Input Generator'
        }
      })
      // Meter
      .state('html-generator.meter', {
        url: '/meter',
        templateUrl: 'generators/html-generator/meter/meter.template.html',
        title: 'HTML5 Meter Generator',
        ncyBreadcrumb: {
          label: 'Meter'
        },
        metaTags: {
          title: 'HTML5 Meter Generator'
        }
      })
      // Progress Bar
      .state('html-generator.progress-bar', {
        url: '/progress-bar',
        templateUrl: 'generators/html-generator/progress-bar/progress-bar.template.html',
        title: 'HTML5 Progress Bar Generator',
        ncyBreadcrumb: {
          label: 'Progress Bar'
        },
        metaTags: {
          title: 'HTML5 Progress Bar Generator'
        }
      })
      // Textarea
      .state('html-generator.textarea', {
        url: '/textarea',
        templateUrl: 'generators/html-generator/textarea/textarea.template.html',
        title: 'HTML Textarea Generator',
        ncyBreadcrumb: {
          label: 'Textarea'
        },
        metaTags: {
          title: 'HTML Textarea Generator'
        }
      })
      // Text Bi-Directional Override
      .state('html-generator.text-bi-directional-override', {
        url: '/text-bi-directional-override',
        templateUrl: 'generators/html-generator/text-bi-directional-override/text-bi-directional-override.template.html',
        title: 'HTML Bi-Directional Override Generator',
        ncyBreadcrumb: {
          label: 'Bi-Directional Override'
        },
        metaTags: {
          title: 'HTML Bi-Directional Override Generator'
        }
      })
      // Text Bold
      .state('html-generator.text-bold', {
        url: '/text-bold',
        templateUrl: 'generators/html-generator/text-bold/text-bold.template.html',
        title: 'HTML Bold Text Generator',
        ncyBreadcrumb: {
          label: 'Bold Text'
        },
        metaTags: {
          title: 'HTML Bold Text Generator'
        }
      })
      // Text Cite
      .state('html-generator.text-cite', {
        url: '/text-cite',
        templateUrl: 'generators/html-generator/text-cite/text-cite.template.html',
        title: 'HTML Citation Generator',
        ncyBreadcrumb: {
          label: 'Citation'
        },
        metaTags: {
          title: 'HTML Citation Generator'
        }
      })
      // Text Code
      .state('html-generator.text-code', {
        url: '/text-code',
        templateUrl: 'generators/html-generator/text-code/text-code.template.html',
        title: 'HTML Code Styled Text Generator',
        ncyBreadcrumb: {
          label: 'Code Text'
        },
        metaTags: {
          title: 'HTML Code Styled Text Generator'
        }
      })
      // Text Italic
      .state('html-generator.text-italic', {
        url: '/text-italic',
        templateUrl: 'generators/html-generator/text-italic/text-italic.template.html',
        title: 'HTML Italic Text Generator',
        ncyBreadcrumb: {
          label: 'Italic Text'
        },
        metaTags: {
          title: 'HTML Italic Text Generator'
        }
      })
      // Text Incorrect
      .state('html-generator.text-incorrect', {
        url: '/text-incorrect',
        templateUrl: 'generators/html-generator/text-incorrect/text-incorrect.template.html',
        title: 'HTML5 Incorrect (Strikethrough) Text Generator',
        ncyBreadcrumb: {
          label: 'Incorrect Text'
        },
        metaTags: {
          title: 'HTML5 Incorrect (Strikethrough) Text Generator'
        }
      })
      // Text Mark
      .state('html-generator.text-mark', {
        url: '/text-mark',
        templateUrl: 'generators/html-generator/text-mark/text-mark.template.html',
        title: 'HTML5 Marked (Highlighted) Text Generator',
        ncyBreadcrumb: {
          label: 'Marked Text'
        },
        metaTags: {
          title: 'HTML5 Marked (Highlighted) Text Generator'
        }
      })
      // Text Quote / Blockquote
      .state('html-generator.text-quote', {
        url: '/text-quote',
        templateUrl: 'generators/html-generator/text-quote/text-quote.template.html',
        title: 'HTML Quote & Blockquote Generator',
        ncyBreadcrumb: {
          label: 'Quote & Blockquote'
        },
        metaTags: {
          title: 'HTML Quote & Blockquote Generator'
        }
      })
      // Text Superscript / Subscript
      .state('html-generator.text-superscript-subscript', {
        url: '/text-superscript-subscript',
        templateUrl: 'generators/html-generator/text-superscript-subscript/text-superscript-subscript.template.html',
        title: 'HTML Superscript & Subscript Generator',
        ncyBreadcrumb: {
          label: 'Superscript & Subscript'
        },
        metaTags: {
          title: 'HTML Superscript & Subscript Generator'
        }
      })
      // Text Underline
      .state('html-generator.text-underline', {
        url: '/text-underline',
        templateUrl: 'generators/html-generator/text-underline/text-underline.template.html',
        title: 'HTML Underlined Text Generator',
        ncyBreadcrumb: {
          label: 'Underlined Text'
        },
        metaTags: {
          title: 'HTML Underlined Text Generator'
        }
      })
      // Video
      .state('html-generator.video', {
        url: '/video',
        templateUrl: 'generators/html-generator/video/video.template.html',
        title: 'HTML5 Video Generator',
        ncyBreadcrumb: {
          label: 'Video'
        },
        metaTags: {
          title: 'HTML5 Video Generator',
          description: 'Generate an HTML5 video element to play a video on your website. Autoplay, muted or loop, it\'s your choice! Preview, test, and copy the code to your website.'
        }
      });
  }]);
})();
