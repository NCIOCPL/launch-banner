import content from './alert.html?raw';
import fontCss from './fonts.scss?inline';
import css from './banner.scss?inline';

// Font faces need to be loaded into the main head. Hopefully this pollution
// is ok.
const fontStyles = document.createElement('style');
document.head.appendChild(fontStyles);
fontStyles.appendChild(document.createTextNode(fontCss));

// This is where we inject the contents and CSS of the alert
// banner.
const div = document.createElement('div');
document.body.insertAdjacentElement('afterbegin', div);

div.attachShadow({ mode: 'open' });
const shadowRoot = div.shadowRoot;
if (shadowRoot !== null) {
	const alertStyles = document.createElement('style');
	shadowRoot.appendChild(alertStyles);
	alertStyles.appendChild(document.createTextNode(css));
	const alertContents = document.createElement('div');
	alertContents.innerHTML = content;
	shadowRoot.appendChild(alertContents);
}
