Vim�UnDo� x\lP��/Iy���nܡ"���>��Q   �   R      @appAnalytics.track user, "Project Restored", _.assign(count, pending, live)   +   Q                       Z՞    _�       	             &        ����                                                                                                                                                                                                                                                                                                                                       $           V        Z՚�     �   %   ,   �    �   &   '   �    5�_�      
           	   ,       ����                                                                                                                                                                                                                                                                                                                                       $           V        Z՚�     �   +   .   �        archived: (user) =>5�_�   	              
   '   ,    ����                                                                                                                                                                                                                                                                                                                                       $           V        Z՚�     �   &   (   �      5    @log.say "Grabbing analytics for deleted project"5�_�   
                 +   0    ����                                                                                                                                                                                                                                                                                                                                       $           V        Z՚�     �   *   ,   �      Q      @appAnalytics.track user, "Project Deleted", _.assign(count, pending, live)5�_�                    ,        ����                                                                                                                                                                                                                                                                                                                                       $           V        Z՚�    �   +   -            5�_�                    &   	    ����                                                                                                                                                                                                                                                                                                                                       $           V        Z՝    �   %   '   �        removed: (user, account) =>5�_�                    )   Y    ����                                                                                                                                                                                                                                                                                                                                       $           V        Z՝�     �   (   *   �      [    @Q.all [ @getProjectCount(user, account), @getPendingCount(user), @getLiveCount(user) ]5�_�                    )   E    ����                                                                                                                                                                                                                                                                                                                                       $           V        Z՝�     �   (   *   �      F    @Q.all [ @getProjectCount(user, account), @getPendingCount(user) ]5�_�                    *   !    ����                                                                                                                                                                                                                                                                                                                                       $           V        Z՝�     �   )   +   �      %    .spread (count, pending, live) =>5�_�                    +   Q    ����                                                                                                                                                                                                                                                                                                                                       $           V        Z՝�    �   *   ,   �      R      @appAnalytics.track user, "Project Restored", _.assign(count, pending, live)5�_�                    +   C    ����                                                                                                                                                                                                                                                                                                                                       $           V        Z՞     �   *   ,   �      C      @appAnalytics.track user, "Project Restored", _.assign(count)5�_�                     +   =    ����                                                                                                                                                                                                                                                                                                                                       $           V        Z՞    �   *   ,   �      B      @appAnalytics.track user, "Project Restored", _.assign(count5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Zՙq     �          �      5ck user, "Project Blueprint Child Created", analytics5�_�                   	        ����                                                                                                                                                                                                                                                                                                                                                             Zՙ�     �      
   �               5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             Zՙ�     �   	      �        restored: (user, account) =>   6    @log.say "Grabbing analytics for restored project"           5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       Zՙ�     �         �    �         �      [    @Q.all [ @getProjectCount(user, account), @getPendingCount(user), @getLiveCount(user) ]   %    .spread (count, pending, live) =>   Q      @appAnalytics.track user, "Project Deleted", _.assign(count, pending, live)5�_�                       0    ����                                                                                                                                                                                                                                                                                                                                                V       Zՙ�     �         �      R      @appAnalytics.track user, "Project Restored", _.assign(count, pending, live)5�_�                             ����                                                                                                                                                                                                                                                                                                                                                V       Zՙ�    �                 5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Zՙs     �         �      gT  removed: (user, account) =>5��