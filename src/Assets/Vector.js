

import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";

    export default function Vector(props) {
        const{name,size,color}=props
      return (
      
                  <Icon
                    name={name}
                    size={size}
                    color={color}
                    />   
         
        
      );
    }