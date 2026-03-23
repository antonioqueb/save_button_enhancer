# -*- coding: utf-8 -*-
{
    'name': 'Save Button Enhancer',
    'version': '19.0.1.0.0',
    'summary': 'Reemplaza los controles de guardar y descartar por botones de texto',
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
}