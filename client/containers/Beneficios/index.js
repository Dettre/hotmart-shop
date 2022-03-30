import React from 'react';

import ItemBeneficio from '../../components/Item/Beneficio';

const Beneficios = () => (
    <div className="Beneficios">
        <div className="container flex horizontal-mb wrap-mb">
            <ItemBeneficio 
                icone="fas fa-cart-arrow-down" 
                texto="Em 6x sem juros para todo o site" />
            <ItemBeneficio 
                icone="fas fa-truck"
                texto="Entregamos em todo o Brasil" />
            <ItemBeneficio 
                icone="fas fa-exclamation"
                texto="O melhor da moda nacional" />
            <ItemBeneficio 
                icone="fa-globe" 
                texto="100% Brasil !!" />
        </div>
    </div>
)

export default Beneficios;