<template>
    <div class="container-fluid" id="projects">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <h3>This is the projects page</h3>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="projects">
                <div v-if="!projectData.length">
                    <Spinner/>
                </div>
                <div v-else>
                    <div class="row justify-content-center" id="r1">
                        <div class="col-md-4" v-for="project,index in projectData" :key="project">
                            <div class="card" :id="'c'+index" style="width: 18rem;">
                                <img :src="project.img" class="card-img-top" alt="">
                                <div class="card-body" style="height: 260px;">
                                    <h5 class="card-title">{{ project.title }}</h5>
                                    <p class="card-text">{{ project.description }}</p>
                                    <a :href="project.netlify" class=" mx-1 btn btn-primary netlify">Netify</a>
                                    <a :href="project.github" class="my-1 btn btn-primary github">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Spinner from '@/components/Spinner.vue';
export default {
    components:
    {
        Spinner
    },
    computed: 
    {
        projectData()
        {
            return this.$store.getters.getProjectData;
        },
    },
    mounted() 
    {
        this.$store.dispatch('fetchProjectData');
        this.$store.dispatch('fetchProject2Data');
    },
}
</script>
<style scoped>
#projects{
    text-align: center;
}
.projects .card{
    overflow: hidden;
    margin-bottom: 90px;
    display: inline-block;
    max-width: fit-content;
    min-height: fit-content;
}
a.netlify{
    background-color: blue;
    border: none;
}
a.netlify:hover{
    color: black;
}
a.github{
    background-color: white;
    color: black;
    border-color: white;
}
a.github:hover{
    color: white;
    background-color: black;
}

</style>