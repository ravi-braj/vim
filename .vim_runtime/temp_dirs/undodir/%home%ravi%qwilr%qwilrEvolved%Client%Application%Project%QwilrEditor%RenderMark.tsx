Vim�UnDo� �Y�ƃ䩇LPrC���W�l�` �]�_�            return <b>{children}</b>;            D       D   D   D    [�C    _�                             ����                                                                                                                                                                                                                                                                                                                                                             [y�     �                   �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             [y�     �                import * as React from "react";5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             [y�     �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [y�     �                *5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [y�     �                /*5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [y�     �                */5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             [y�    �                5�_�      #          	          ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         4  const { node, attributes, children } = properties;5�_�   	   $   
       #   
       ����                                                                                                                                                                                                                                                                                                                                                             [z+     �   	              switch (node.type) {5�_�   #   %           $           ����                                                                                                                                                                                                                                                                                                                                                V       [z;     �             	   1      return (<p {...attributes}>{children}</p>);       case "heading1":   3      return (<h1 {...attributes}>{children}</h1>);       case "heading2":   3      return (<h2 {...attributes}>{children}</h2>);       case "blockQuote":   C      return (<blockquote {...attributes}>{children}</blockquote>);       case "listItem":   (      return renderListItem(properties);5�_�   $   &           %      
    ����                                                                                                                                                                                                                                                                                                                                                V       [{�     �   
                case "paragraph":5�_�   %   '           &      
    ����                                                                                                                                                                                                                                                                                                                                                V       [{�     �   
                case "aragraph":5�_�   &   (           '      
    ����                                                                                                                                                                                                                                                                                                                                                V       [{�     �   
                case "ragraph":5�_�   '   )           (      
    ����                                                                                                                                                                                                                                                                                                                                                V       [{�     �   
                case "agraph":5�_�   (   *           )      
    ����                                                                                                                                                                                                                                                                                                                                                V       [{�     �   
                case "graph":5�_�   )   +           *      
    ����                                                                                                                                                                                                                                                                                                                                                V       [{�     �   
                case "raph":5�_�   *   ,           +      
    ����                                                                                                                                                                                                                                                                                                                                                V       [{�     �   
                case "aph":5�_�   +   -           ,      
    ����                                                                                                                                                                                                                                                                                                                                                V       [{�     �   
                case "ph":5�_�   ,   .           -      
    ����                                                                                                                                                                                                                                                                                                                                                V       [{�     �   
                case "h":5�_�   -   /           .      
    ����                                                                                                                                                                                                                                                                                                                                                V       [{�     �   
                case "":5�_�   .   0           /          ����                                                                                                                                                                                                                                                                                                                                                V       [{�     �   
                case "bold":5�_�   /   1           0          ����                                                                                                                                                                                                                                                                                                                                                V       [{�     �                      return <b> {...props} </b>5�_�   0   2           1          ����                                                                                                                                                                                                                                                                                                                                                V       [{�    �                     return <b> {...props}</b>5�_�   1   3           2          ����                                                                                                                                                                                                                                                                                                                                                V       [{�    �                     return <b>{...props}</b>5�_�   2   4           3           ����                                                                                                                                                                                                                                                                                                                                                V       [|-    �                  5�_�   3   5           4          ����                                                                                                                                                                                                                                                                                                                                                V       [|=     �                 export default renderMark5�_�   4   6           5          ����                                                                                                                                                                                                                                                                                                                                                V       [|>     �                 export default PrenderMark5�_�   5   7           6          ����                                                                                                                                                                                                                                                                                                                                                V       [|A    �                 export default {renderMark5�_�   6   8           7          ����                                                                                                                                                                                                                                                                                                                                                V       [|P    �               ,let renderNode = (properties: any): any => {5�_�   7   9           8   
       ����                                                                                                                                                                                                                                                                                                                                                V       [~u     �   	              switch (props.mark.type) {5�_�   8   :           9          ����                                                                                                                                                                                                                                                                                                                                                V       [~x    �                     return <b>{...props}</b>;5�_�   9   ;           :          ����                                                                                                                                                                                                                                                                                                                                                V       [�   	 �               $      return <b>{...properties}</b>;5�_�   :   <           ;          ����                                                                                                                                                                                                                                                                                                                                                V       [�     �      	         5  const { props, attributes, children } = properties;5�_�   ;   =           <   
       ����                                                                                                                                                                                                                                                                                                                                                V       [�     �   	            !  switch (properties.mark.type) {5�_�   <   >           =   
       ����                                                                                                                                                                                                                                                                                                                                                V       [�   
 �   	              switch (.mark.type) {5�_�   =   ?           >   	        ����                                                                                                                                                                                                                                                                                                                                                V       [�    �                5�_�   >   @           ?          ����                                                                                                                                                                                                                                                                                                                                                V       [�Q     �                 export default {renderMark}5�_�   ?   A           @          ����                                                                                                                                                                                                                                                                                                                                                V       [�S    �                 export default {renderMark5�_�   @   B           A           ����                                                                                                                                                                                                                                                                                                                                                V       [�6     �             �             5�_�   A   C           B          ����                                                                                                                                                                                                                                                                                                                                                V       [�8     �                   case "bold":5�_�   B   D           C          ����                                                                                                                                                                                                                                                                                                                                                V       [�?     �                     return <b>{children}</b>;5�_�   C               D          ����                                                                                                                                                                                                                                                                                                                                                V       [�B    �                     return <i>{children}</b>;5�_�   	          #   
          ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         7  const { propsxx, attributes, children } = properties;5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         6  const { propsx, attributes, children } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         5  const { props, attributes, children } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         4  const { props attributes, children } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         3  const { propsattributes, children } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         2  const { propsttributes, children } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         1  const { propstributes, children } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         0  const { propsributes, children } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         /  const { propsibutes, children } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         .  const { propsbutes, children } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         -  const { propsutes, children } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         ,  const { propstes, children } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         +  const { propses, children } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         *  const { propss, children } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         )  const { props, children } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         (  const { props children } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         '  const { propschildren } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         &  const { propshildren } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         %  const { propsildren } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         $  const { propsldren } = properties;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         #  const { propsdren } = properties;5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         "  const { propsren } = properties;5�_�      !                      ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	         !  const { propsen } = properties;5�_�       "           !          ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	            const { propsn } = properties;5�_�   !               "          ����                                                                                                                                                                                                                                                                                                                                                             [z     �      	           const { props } = properties;5�_�              	             ����                                                                                                                                                                                                                                                                                                                                                             [z
     �      	        5��