{
    'name': 'Save Button Enhancer',
    'version': '19.0.1.0.0',
    'summary': 'Hace el botón de guardar (nube) más grande y llamativo',
    'category': 'Technical',
    'author': 'Alphaqueb Consulting SAS',
    'license': 'LGPL-3',
    'depends': ['web'],
    'assets': {
        'web.assets_backend': [
            'save_button_enhancer/static/src/css/save_button.css',
            'save_button_enhancer/static/src/js/save_button_patch.js',
        ],
    },
    'installable': True,
    'auto_install': False,
}
