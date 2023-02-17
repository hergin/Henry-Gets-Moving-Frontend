import {
    Recipe,
    Exercise,
    RecipeCategory,
    ExerciseCategory,
    Demonstration,
    DemonstrationCategory,
    Diagram,
    FamilyMember, ExerciseLog
} from "./Structs/DataTypes";

export const API_URL = "http://127.0.0.1:3333";

const getRecipes = async (): Promise<Recipe[]> => {
    return await fetch(`${API_URL}/recipes`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response.map((recipe: any) => {
                return {
                    ...recipe
                } as Recipe
            });
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}
const getPaginatedRecipes = async (page: String) => {
    return await fetch(`${API_URL}/paginatedRecipes/?page=${page}`)
        .then((response) => {
            return response.json();
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}

const getExercises = async (): Promise<Exercise[]> => {
    return await fetch(`${API_URL}/exercises`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response.map((exercise: any) => {
                return {
                    ...exercise
                } as Exercise
            });
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}
const getPaginatedExercises = async (page: String) => {
    return await fetch(`${API_URL}/paginatedExercises/?page=${page}`)
        .then((response) => {
            return response.json();
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}

const getDemonstrations = async (): Promise<Demonstration[]> => {
    return await fetch(`${API_URL}/demos`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response.map((demos: any) => {
                return {
                    ...demos
                } as Demonstration
            });
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}



const getDiagrams = async (): Promise<Diagram[]> => {
    return await fetch(`${API_URL}/diagrams`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response.map((diagram: any) => {
                return {
                    ...diagram
                } as Diagram
            });
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}

const getPaginatedDemos = async (page:string) => {
    return await fetch(`${API_URL}/paginatedDemos/?page=${page}`)
        .then((response) => {
            return response.json();
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}

const getExerciseCategories = async (): Promise<ExerciseCategory[]> => {
    return await fetch(`${API_URL}/exerciseCategories`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response.map((exerciseCategory: any) => {
                return {
                    ...exerciseCategory
                } as ExerciseCategory
            });
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}

const getRecipeCategories = async (): Promise<RecipeCategory[]> => {
    return await fetch(`${API_URL}/recipeCategories`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response.map((recipeCategory: any) => {
                return {
                    ...recipeCategory
                } as RecipeCategory
            });
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}
const getDemonstrationCategories = async (): Promise<DemonstrationCategory[]> => {
    return await fetch(`${API_URL}/demoCategories`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response.map((demoCategory: any) => {
                return {
                    ...demoCategory
                } as DemonstrationCategory
            });
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}

const getFeaturedRecipe = async (): Promise<Recipe> => {
    return await fetch(`${API_URL}/featuredRecipe`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response;
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}

const getFeaturedExercise = async (): Promise<Exercise> => {
    return await fetch(`${API_URL}/featuredExercise`)
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response;
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}

const getFamilyMembers = async (): Promise<FamilyMember[]> => {
    return await fetch(`${API_URL}/familyMembers`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("session_key")}`
            }
        }
    ).then((response) => {
        if (response.ok) return response.json();
        return {
            errorCode: response.status,
            error: response.statusText,
        }
    }).then((response) => {
        return response.map((familyMember: any) => {
            return {
                ...familyMember
            } as FamilyMember
        });
    });
}

const getMemberExerciseLogs = async (familyMemberId: string): Promise<ExerciseLog[]> => {
    return await fetch(`${API_URL}/exerciseLogs/${familyMemberId}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("session_key")}`
        }
    })
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response.map((exerciseLog: ExerciseLog) => {
                return {
                    ...exerciseLog
                } as ExerciseLog
            });
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}
const getExerciseLogs = async (): Promise<ExerciseLog[]> => {
    return await fetch(`${API_URL}/exerciseLogs/`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("session_key")}`
        }
    }).then((response) => {
        return response.json();
    }).then((response) => {
        return response.map((exerciseLog: ExerciseLog) => {
            return {
                ...exerciseLog
            } as ExerciseLog
        });
    }).catch((response) => {
        return {
            errorCode: response.status,
            error: response.statusText,
        }
    });
}

const swapFeaturedExercise = async (exerciseId: string): Promise<Exercise> => {
    return await fetch(`${API_URL}/changeFeaturedExercise/${exerciseId}`, {
        method: "POST"
    })
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response;
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}
const swapFeaturedRecipe = async (recipeId: string): Promise<Recipe> => {
    return await fetch(`${API_URL}/changeFeaturedRecipe/${recipeId}`, {
        method: "POST"
    })
        .then((response) => {
            return response.json();
        }).then((response) => {
            return response;
        }).catch((response) => {
            return {
                errorCode: response.status,
                error: response.statusText,
            }
        });
}


const getTotalLoggedDuration = async (familyMember: string, date: Date = new Date()): Promise<number> => {
    let result = 0;
    await getExerciseLogs().then(function(logs) {
        logs.forEach(function (log) {
            if (log.name === familyMember && new Date(log.date).toLocaleDateString() === date.toLocaleDateString()) {
                result += parseInt(log.duration);
            }
        });
    });
    return Promise.resolve(result);
}


const isLoggedIn = (): boolean => {
    return sessionStorage.getItem('session_key') != null;
}

const logOut = () => {
    sessionStorage.removeItem('session_key')
}

const parseEmbedLink = (link: string) => {
    return link.replace("watch?v=", "/embed");
}

const API ={
    getRecipes,
    getExercises,
    getPaginatedExercises,
    getPaginatedRecipes,
    getRecipeCategories,
    getDemonstrations,
    getDemonstrationCategories,
    getExerciseCategories,
    getFeaturedRecipe,
    getFeaturedExercise,
    getDiagrams,
    isLoggedIn,
    API_URL,
    getFamilyMembers,
    getMemberExerciseLogs,
    getPaginatedDemos,
    getExerciseLogs,
    swapFeaturedRecipe,
    swapFeaturedExercise,
    getTotalLoggedDuration,
    logOut
}

export default API;