import { Card, CardContent } from "@/components/ui/card";
import { COLORS } from "@/constants";
import { CARD_SETTINGS } from "@/data";

export default function CardSetting() {
  return (
    <div className="col-span-1">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-primary-2">Card Setting</h2>
      </div>
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {CARD_SETTINGS.map((setting) => {
              return (
                <div
                  key={setting.id}
                  className="flex items-center gap-4 pb-4 border-b border-border last:border-0"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: COLORS.paleBlue }}
                  >
                    <setting.icon
                      size={24}
                      style={{ color: COLORS.primary3 }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-semibold text-base"
                      style={{ color: COLORS.primary2 }}
                    >
                      {setting.title}
                    </h3>
                    <p
                      className="text-sm mt-1"
                      style={{ color: COLORS.primary4 }}
                    >
                      {setting.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
