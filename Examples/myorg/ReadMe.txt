https://nx.dev/latest/angular/tutorial/01-create-application

######### Setup ############
> npx create-nx-workspace@latest
> npx nx serve todos

> npm install -g nx
or
> yarn global add nx

> nx serve todos

########## Run e2e Tests#######
> nx e2e todos-e2e --watch
> nx e2e todos-e2e --headless

###########Install Nest########
> nx list @nrwl/nest
> npm install --save-dev @nrwl/nest
> nx g @nrwl/nest:app api --frontendProject=todos

###########Serve API ###########
> nx serve api
> nx build api
> nx test api


###########Dep Graph#############
> nx dep-graph
