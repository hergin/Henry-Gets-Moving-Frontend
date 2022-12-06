import { FamilyMember } from "../Structs/DataTypes";

const familyMemberLayout = (members: FamilyMember[], selectedDate: Date) => {
    let familyMemberNames: string[] = [];
    let totalDurations: string[] = [];
    members.forEach(function (member) {
        member.exerciseLog.forEach(function (log) {
            if (new Date(log.created_at).toLocaleDateString() === selectedDate.toLocaleDateString()) {
                if (familyMemberNames.includes(log.name)) {
                    totalDurations[familyMemberNames.indexOf(log.name)] = `${parseInt(totalDurations[familyMemberNames.indexOf(log.name)]) + parseInt(log.duration)}`;
                } else {
                    familyMemberNames.push(log.name);
                    totalDurations[familyMemberNames.indexOf(log.name)] = log.duration;
                }
            }
        });
});
    return familyMemberNames.map((member)=>{
        return (
            <div className='logs'>
                <p>{member + " logged "+ totalDurations[familyMemberNames.indexOf(member)] +" minutes of activity! " + (parseInt(totalDurations[familyMemberNames.indexOf(member)]) > 59 ? "Great job!" : "There's still time to hit 60 minutes today!")}</p>
            </div>
        )
    });
}

export default familyMemberLayout;