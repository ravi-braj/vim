Vim�UnDo� o,�2RA�z��}�#)�������ϲe�j   9   C      .doAction(TransformActions.toggleBlock(BlockType.BlockQuote),   #   A                       [1�    _�                            ����                                                                                                                                                                                                                                                                                                                                                  V        [1��     �         k    �         k    �                %      .doAction( (event, change) => {   !        change.toggleMark("bold")           return true;   	      }),5�_�                            ����                                                                                                                                                                                                                                                                                                                                          (       V        [1��     �         l    �         l    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        [1��     �         i    �         i    �                %      .doAction( (event, change) => {   #        change.toggleMark("italic")           return true;   	      }),5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       [1��    �         j       5�_�                           ����                                                                                                                                                                                                                                                                                                                                      $          v       [1��     �         j      %      .doAction( (event, change) => {   ^        if (change.value.blocks.some( (node) => { return node.type == BlockType.ListItem })) {   0          change.setBlocks(BlockType.Paragraph);           } else {   /          change.setBlocks(BlockType.ListItem);   	        }           return true;   	      }),5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                v       [1��     �         c            .doAction( ),5�_�      
           	      ;    ����                                                                                                                                                                                                                                                                                                                                                v       [1��    �         c      >      .doAction(TransformActions.toggleBlock(BlockType.List)),5�_�   	              
      A    ����                                                                                                                                                                                                                                                                                                                                                v       [1�     �         c      B      .doAction(TransformActions.toggleBlock(BlockType.ListItem)),5�_�   
                    A    ����                                                                                                                                                                                                                                                                                                                                                v       [1�	    �         c      A      .doAction(TransformActions.toggleBlock(BlockType.ListItem))5�_�                    #       ����                                                                                                                                                                                                                                                                                                                            #          *          v       [1�C     �   "   $   c      %      .doAction( (event, change) => {   `        if (change.value.blocks.some( (node) => { return node.type == BlockType.BlockQuote })) {   0          change.setBlocks(BlockType.Paragraph);           } else {   1          change.setBlocks(BlockType.BlockQuote);   	        }           return true;   	      }),5�_�                    #       ����                                                                                                                                                                                                                                                                                                                            #          #          v       [1�E     �   "   $   \            .doAction( ),5�_�                    #   B    ����                                                                                                                                                                                                                                                                                                                            #          #          v       [1�Q    �   "   $   \      D      .doAction(TransformActions.toggleBlock(BlockType.BlockQuote ),5�_�                    )       ����                                                                                                                                                                                                                                                                                                                            )          0          v       [1�c     �   (   *   \      %      .doAction( (event, change) => {   ^        if (change.value.blocks.some( (node) => { return node.type == BlockType.Heading1 })) {   0          change.setBlocks(BlockType.Paragraph);           } else {   /          change.setBlocks(BlockType.Heading1);   	        }           return true;   	      }),5�_�                    )       ����                                                                                                                                                                                                                                                                                                                            )          )          v       [1�c     �   (   *   U            .doAction(),5�_�                   /        ����                                                                                                                                                                                                                                                                                                                            /           6           V        [1�y     �   .   0   M    �   /   0   M    �   .   /          %      .doAction( (event, change) => {   ^        if (change.value.blocks.some( (node) => { return node.type == BlockType.Heading2 })) {   0          change.setBlocks(BlockType.Paragraph);           } else {   /          change.setBlocks(BlockType.Heading2);   	        }           return true;   	      }),5�_�                    /   ?    ����                                                                                                                                                                                                                                                                                                                            /           /   A       V        [1�|    �   .   0   N      B      .doAction(TransformActions.toggleBlock(BlockType.Heading1)),5�_�                    J        ����                                                                                                                                                                                                                                                                                                                            J          M          V       [1��     �   I   J          )let isLink = (text: string): boolean => {   1  let urlRegex = /(www|http:|https:)+[^\s]+[\w]/;     return urlRegex.test(text);   }5�_�                    5       ����                                                                                                                                                                                                                                                                                                                            5          F          v       [1��     �   4   6   J      %      .doAction( (event, change) => {   [        if (change.value.inlines.some( (node) => { return node.type == BlockType.Link })) {   )          change.unwrapInline(this.type);           } else {   N          // If the highlighted text looks like a link then lets automatically   %          // set the URL for the user   8          let selectedText = change.value.fragment.text;             let linkData = {               href: ""             };   $          if(isLink(selectedText)) {   *            linkData.href = selectedText;              }   0          let selection = change.value.selection   V          change.wrapInlineAtRange(selection, {type: BlockType.Link, data: linkData});   	        }           return true;   	      }),5�_�                    5       ����                                                                                                                                                                                                                                                                                                                            5          5          v       [1��    �   4   6   9            .doAction( ),5�_�                     #   A    ����                                                                                                                                                                                                                                                                                                                            5          5          v       [1�    �   "   $   9      C      .doAction(TransformActions.toggleBlock(BlockType.BlockQuote),5�_�                    /        ����                                                                                                                                                                                                                                                                                                                            /           /   A       V        [1�y     �   .   7        �   /   0   M    �   .   /   M      B      .doAction(TransformActions.toggleBlock(BlockType.Heading1)),5�_�                            ����                                                                                                                                                                                                                                                                                                                                          *       V        [1��     �              �         i    �         i      +      .doAction(StylingActions.makeItalic),5�_�                             ����                                                                                                                                                                                                                                                                                                                                          (       V        [1��     �              �         k    �         k      )      .doAction(StylingActions.makeBold),5��