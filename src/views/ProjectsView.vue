<template>
    <div class="container-fluid" id="projects">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <h3>This is the projects page</h3>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="projects">
                <div v-if="!projectData.length && !project2Data.length">
                    <Spinner/>
                </div>
                <div v-else>
                    <div class="row justify-content-center">
                        <div class="col-md-4" v-for="project in projectData" :key="project">
                            <div class="card" style="width: 18rem;">
                                    <img :src="project.img" class="card-img-top" alt="">
                                <div class="card-body">
                                    <h5 class="card-title">{{ project.title }}</h5>
                                    <p class="card-text">{{ project.description }}</p>
                                    <a href="#" class="mx-1 btn btn-primary netlify">Netify</a>
                                    <a href="" class="my-1 btn btn-primary github">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-4" v-for="project in project2Data" :key="project">
                            <div class="card" style="width: 18rem;">
                                    <img :src="project.img" class="card-img-top" alt="">
                                <div class="card-body">
                                    <h5 class="card-title">{{ project.title }}</h5>
                                    <p class="card-text">{{ project.description }}</p>
                                    <a href="#" class="mx-1 btn btn-primary netlify">Netify</a>
                                    <a href="" class="my-1 btn btn-primary github">Github</a>
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
        project2Data()
        {
            return this.$store.getters.getProject2Data;
        }
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
    width: 100%;
    max-width: fit-content;
}
</style>