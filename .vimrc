execute pathogen#infect()
set runtimepath+=~/.vim_runtime

source ~/.vim_runtime/vimrcs/basic.vim
source ~/.vim_runtime/vimrcs/filetypes.vim
source ~/.vim_runtime/vimrcs/plugins_config.vim
source ~/.vim_runtime/vimrcs/extended.vim

try
source ~/.vim_runtime/my_configs.vim
catch
endtry

set number
set nofoldenable

set wildmenu
set wildmode=list:full

set path+=**
set wildignorecase

" regex completion instead of whole word completion
nnoremap <leader>f :find *
" restrict the matching to files under the directory
" of the current file, recursively
nnoremap <leader>F :find <C-R>=expand('%:p:h').'/**/*'<CR>

" same as the two above but opens the file in an horizontal window
nnoremap <leader>s :sfind *
nnoremap <leader>S :sfind <C-R>=expand('%:p:h').'/**/*'<CR>

" same as the two above but with a vertical window
nnoremap <leader>v :vert sfind *
nnoremap <leader>V :vert sfind <C-R>=expand('%:p:h').'/**/*'<CR>

set expandtab
set tabstop=2
set shiftwidth=2
