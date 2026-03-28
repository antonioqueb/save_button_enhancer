## ./__init__.py
```py
```

## ./__manifest__.py
```py
# -*- coding: utf-8 -*-
{
    'name': 'Save Button Enhancer',
    'version': '19.0.1.0.1',
    'summary': 'Reemplaza los iconos de guardar y descartar por botones de texto',
    'category': 'Technical',
    'author': 'Alphaqueb Consulting SAS',
    'license': 'LGPL-3',
    'depends': ['web'],
    'assets': {
        'web.assets_backend': [
            'save_button_enhancer/static/src/xml/form_status_indicator.xml',
            'save_button_enhancer/static/src/css/save_button.css',
        ],
    },
    'installable': True,
    'auto_install': False,
}```

## ./static/src/xml/form_status_indicator.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<templates xml:space="preserve">

    <t t-name="save_button_enhancer.FormStatusIndicator"
       t-inherit="web.FormStatusIndicator"
       t-inherit-mode="extension">

        <!-- Guardar: conservar el botón original y su t-ref="save" -->
        <xpath expr="//button[hasclass('o_form_button_save')]" position="attributes">
            <attribute name="class">o_form_button_save btn btn-primary px-3 py-1 lh-sm</attribute>
            <attribute name="data-tooltip">Guardar cambios</attribute>
            <attribute name="aria-label">Guardar cambios</attribute>
        </xpath>

        <xpath expr="//button[hasclass('o_form_button_save')]/i" position="replace">
            <span>Guardar</span>
        </xpath>

        <!-- Descartar -->
        <xpath expr="//button[hasclass('o_form_button_cancel')]" position="attributes">
            <attribute name="class">o_form_button_cancel btn btn-outline-secondary px-3 py-1 lh-sm ms-2</attribute>
            <attribute name="data-tooltip">Descartar cambios</attribute>
            <attribute name="aria-label">Descartar cambios</attribute>
        </xpath>

        <xpath expr="//button[hasclass('o_form_button_cancel')]/i" position="replace">
            <span>Descartar</span>
        </xpath>

    </t>

</templates>```

