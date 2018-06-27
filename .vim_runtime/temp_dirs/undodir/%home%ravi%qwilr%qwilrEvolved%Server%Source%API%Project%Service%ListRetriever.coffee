Vim�UnDo� *e�퐫�3���X����Nj'i��>&Q�8��,�   �                 
       
   
   
    Z�.�    _�                             ����                                                                                                                                                                                                                                                                                                                                                             Z���     �               �   +module.exports = class ProjectListRetriever   9  constructor: (logger, Q, projects, @deletedprojects) ->       @log = logger @   
    @Q = Q       @projects = projects       \  # Get a list of projects given some filters, sorting and paging options. If no filters are   d  # provided then all projects are retrieved (which is a BAD (read: memory intensive) operation), so   .  # we reject with an error in that occurence.   a  # @param [Array[Object]) serverFilters An array of filters being provided by server-side caller   a  # @param [Object] userFilters (Optional) Filters being provided by the client-side caller (user     # selections, most likely)   b  # @param [Object] userOptions (Optional) Any options to be provided for the query for sorting or   "  # paging. Supported options are:   .  #   `sortBy`: [String] What field to sort on   W  #   `sortDirection`: [Integer] Whether we're sorting ascending (1) or descending (-1)   0  #   `pageSize`: [Integer] The size of the page   N  #   `page`: [Integer] Which page to get, requires a `pageSize` to be defined   C  #   `select`: [String] A space-delimited string of fields to grab   .  # @return [Promise] Resolves an object with:   c  #   `projects`: [Array[Project]] Projects that match after filtering, sorting and any page sizing   _  #   `count`: [Integer] The number of projects that would be returned without any page sizing.     # or rejects with an error     #   <  getList: (serverFilters, userFilters, userOptions = {}) =>   "    @log.at "Getting project list"            unless serverFilters?.length   C      return @Q.reject(new Error "No server-side filters provided")           filters = serverFilters           if userFilters?   /      otherUserFilters = JSON.parse userFilters       else         otherUserFilters = {}           ;    # Default to all projects bucket if no collection given   %    if userOptions.collection?.length   4        @collectionSelected = userOptions.collection       else   ,        @collectionSelected = "all-projects"       '    if @collectionSelected is "deleted"   &        @collection = @deletedprojects       else           @collection = @projects   R        # Archived is a not really a collection so if the user selects the archive   *        # bucket then we just add that tag   ,        if @collectionSelected is "archived"   $          if otherUserFilters?.tags?   5            otherUserFilters["tags"].push("archived")             else   0            otherUserFilters.tags = ["archived"]               if otherUserFilters?   I      filters.push @cleanUserFilter otherUserFilters, @collectionSelected               options = {}           if userOptions.pageSize?   4      options.limit = parseInt(userOptions.pageSize)         if userOptions.page?   R        options.skip = parseInt(userOptions.pageSize) * parseInt(userOptions.page)       !    if userOptions.sortBy?.length         sort = {}   >      sortDirection = parseInt(userOptions.sortDirection) || 1       0      if userOptions.sortBy is "$totalLinkViews"   <        # This will only work if there is 1 link per project   <        sort["links.receipt.numberOfVisits"] = sortDirection   
      else   0        sort[userOptions.sortBy] = sortDirection             options.sort = sort           options.asJSON = true           query = { $and: filters }       �    options.select = "name user createdAt lastEditedAt status hasTemplateChildren hasAcceptEnabled links tags sentToCollaborators partialAcceptanceData.accepters partialAcceptanceData.totalNumAccepters allowIndexing enableSocialBadge"           queries = [   %      @collection.find query, options         @collection.count query       ]           @Q.all queries        .spread (projects, count) =>   L      @log.success "Got #{projects.length} projects from possible #{count}."         return {           projects: projects           count: count         }         # @private   0  # Does some scrubbing of user supplied filters   C  # @TODO: Does how we deal with the "archived" tag belong in here?   .  cleanUserFilter: (filter, collectionName) ->       cleanFilter = {}           if filter.name?.length   ?      cleanFilter.name = { $regex: filter.name, $options: "i" }           if filter.tags?.length   .      cleanFilter.tags = { $all: filter.tags }           if filter.status?.length   h      # If we are filtering by pending, we have to add some special filtering as this is a pseudo-status   #      if "pending" in filter.status   '        _.pull filter.status, "pending"           cleanFilter["$or"] = [               {                 status:   "                $in: filter.status               }               {                 status: "live"   #              hasAcceptEnabled: yes               }             ]   
      else   3        cleanFilter.status = { $in: filter.status }           if filter.user?.length   -      cleanFilter.user = { $in: filter.user }       `    # Manually filtering out "archived" or "templateqwilr" tags unless it is explicitly included       cleanFilter["$and"] = [{   &      tags: { "$ne": "templateqwilr" }       }]   P    if !(_.includes filter.tags, "archived") and (collectionName isnt "deleted")   >      cleanFilter["$and"].push { tags: { "$ne": "archived" } }           return cleanFilter5�_�                    -       ����                                                                                                                                                                                                                                                                                                                                                             Z�,�     �   ,   .   �      4        @collectionSelected = userOptions.collection5�_�                    /       ����                                                                                                                                                                                                                                                                                                                                                             Z�,�     �   .   0   �      ,        @collectionSelected = "all-projects"5�_�                    2       ����                                                                                                                                                                                                                                                                                                                                                             Z�,�     �   1   3   �      &        @collection = @deletedprojects5�_�                    4       ����                                                                                                                                                                                                                                                                                                                                                             Z�,�     �   3   5   �              @collection = @projects5�_�                    4        ����                                                                                                                                                                                                                                                                                                                            4          ;          V       Z�,�    �   3   <   �              @collection = @projects   R        # Archived is a not really a collection so if the user selects the archive   *        # bucket then we just add that tag   ,        if @collectionSelected is "archived"   $          if otherUserFilters?.tags?   5            otherUserFilters["tags"].push("archived")             else   0            otherUserFilters.tags = ["archived"]5�_�                    �   N    ����                                                                                                                                                                                                                                                                                                                            4          ;          V       Z�.`     �   �   �   �      h      # If we are filtering by pending, we have to add some special filtering as this is a pseudo-status5�_�      	              �        ����                                                                                                                                                                                                                                                                                                                            4          ;          V       Z�.f    �   �   �          N      # If we are filtering by pending, we have to add some special filtering 5�_�      
           	   h       ����                                                                                                                                                                                                                                                                                                                            4          ;          V       Z�.�     �   g   j   �      #      @Q.all(_.map(projects, (p) =>5�_�   	               
   h        ����                                                                                                                                                                                                                                                                                                                            4          ;          V       Z�.�    �   g   i                @Q.all(_.map(projects, 5��