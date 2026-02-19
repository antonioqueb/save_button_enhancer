/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { FormStatusIndicator } from "@web/views/form/form_status_indicator/form_status_indicator";
import { onMounted, onPatched } from "@odoo/owl";

/**
 * Patch del FormStatusIndicator para:
 * - Reemplazar ícono de nube por disquete (fa-floppy-o)
 * - Sin alterar funcionalidad
 */
patch(FormStatusIndicator.prototype, {
    setup() {
        super.setup(...arguments);

        const replaceIcons = () => {
            // Buscar íconos de nube en el status indicator y reemplazarlos
            const el = this.__owl__?.bdom?.el || document.querySelector(".o_form_status_indicator");
            if (!el) return;

            const icons = el.querySelectorAll(
                ".fa-cloud-upload, .fa-cloud-upload-alt, .fa-cloud"
            );
            icons.forEach((icon) => {
                icon.classList.remove("fa-cloud-upload", "fa-cloud-upload-alt", "fa-cloud");
                icon.classList.add("fa-floppy-o");
                icon.title = "Guardar cambios";
            });
        };

        onMounted(replaceIcons);
        onPatched(replaceIcons);
    },
});
