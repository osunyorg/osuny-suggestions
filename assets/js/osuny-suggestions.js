import { a11yClick } from './theme/utils/a11y';

var osuny = window.osuny || {};

osuny.Suggestions = function (element) {
    this.element = element;
    this.tabs = this.element.querySelectorAll('.suggestions__tabs button');
    this.panels = this.element.querySelectorAll('.suggestions__content .collapse')
    this.state = {
        // tab who opened the Suggestions
        openedBytab: null
    };

    this.prepare();
    this.listen();
};

osuny.Suggestions.prototype.prepare = function () {
    this.panels.forEach(function (panel) {
        panel.setAttribute('tabindex', '0');
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', 'tab-' + panel.id)
    });
};

osuny.Suggestions.prototype.listen = function () {
    this.tabs.forEach(function (tab) {
        a11yClick(tab, function (event) {
            event.preventDefault();
            this.toggle(tab);
        }.bind(this));
    }.bind(this));

    window.addEventListener('keydown', function (event) {
        if (event.keyCode === 27 || event.key === 'Escape') {
            this.toggle(false);
        }
    }.bind(this));
};

osuny.Suggestions.prototype.a11yFocus = function (tab) {
    if (this.state.opened) {
        this.state.openedBytab = tab;
    }
};

osuny.Suggestions.prototype.toggle = function (tab) {
    var panel = this.getPanel(tab),
        opened = tab.getAttribute('aria-selected');

    this.panels.forEach(function (siblingsPanel) {
        if (siblingsPanel !== panel) {
            siblingsPanel.dispatchEvent(new Event('extendable-close'));
        }
    }.bind(this));

    if (opened) {
        tab.setAttribute('aria-selected', 'true')
        panel.focus();
    }

    this.tabs.forEach(function (siblingsTab) {
        if (tab !== siblingsTab) {
            siblingsTab.setAttribute('aria-selected', 'false');
        }
    }.bind(this));


    // this.a11yFocus(tab);

    if (!this.state.opened && this.state.openedBytab) {
        this.state.openedBytab.focus();
        this.state.openedBytab = null;
    }
};

osuny.Suggestions.prototype.getPanel = function (tab) {
    var id = tab.getAttribute('aria-controls');
    this.panels.forEach(function(tab) {
        if (tab.id === id) {
            selectedTab = tab
        }
    });
    return selectedTab;
};

(function () {
    osuny.utils.instanciateAll('.suggestions', osuny.Suggestions);
}());
